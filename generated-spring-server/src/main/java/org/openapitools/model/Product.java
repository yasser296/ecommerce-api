package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.openapitools.model.Category;
import org.openapitools.model.SellerPreview;
import org.springframework.lang.Nullable;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * Product
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-04-08T10:47:06.539361157Z[Etc/UTC]", comments = "Generator version: 7.22.0-SNAPSHOT")
public class Product {

  private @Nullable UUID id;

  private @Nullable String name;

  private @Nullable String description;

  private @Nullable BigDecimal price;

  private @Nullable String currency;

  private @Nullable Integer stock;

  @Valid
  private List<String> images = new ArrayList<>();

  private @Nullable Category category;

  private @Nullable String createdAt;

  private @Nullable SellerPreview seller;

  @Valid
  private Map<String, Object> links = new HashMap<>();

  public Product id(@Nullable UUID id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @Valid 
  @Schema(name = "id", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("id")
  public @Nullable UUID getId() {
    return id;
  }

  @JsonProperty("id")
  public void setId(@Nullable UUID id) {
    this.id = id;
  }

  public Product name(@Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  
  @Schema(name = "name", example = "Mouse X", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("name")
  public @Nullable String getName() {
    return name;
  }

  @JsonProperty("name")
  public void setName(@Nullable String name) {
    this.name = name;
  }

  public Product description(@Nullable String description) {
    this.description = description;
    return this;
  }

  /**
   * Get description
   * @return description
   */
  
  @Schema(name = "description", example = "Wireless mouse for office and gaming", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("description")
  public @Nullable String getDescription() {
    return description;
  }

  @JsonProperty("description")
  public void setDescription(@Nullable String description) {
    this.description = description;
  }

  public Product price(@Nullable BigDecimal price) {
    this.price = price;
    return this;
  }

  /**
   * Get price
   * @return price
   */
  @Valid 
  @Schema(name = "price", example = "1700", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("price")
  public @Nullable BigDecimal getPrice() {
    return price;
  }

  @JsonProperty("price")
  public void setPrice(@Nullable BigDecimal price) {
    this.price = price;
  }

  public Product currency(@Nullable String currency) {
    this.currency = currency;
    return this;
  }

  /**
   * Get currency
   * @return currency
   */
  
  @Schema(name = "currency", example = "USD", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("currency")
  public @Nullable String getCurrency() {
    return currency;
  }

  @JsonProperty("currency")
  public void setCurrency(@Nullable String currency) {
    this.currency = currency;
  }

  public Product stock(@Nullable Integer stock) {
    this.stock = stock;
    return this;
  }

  /**
   * Get stock
   * @return stock
   */
  
  @Schema(name = "stock", example = "7", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("stock")
  public @Nullable Integer getStock() {
    return stock;
  }

  @JsonProperty("stock")
  public void setStock(@Nullable Integer stock) {
    this.stock = stock;
  }

  public Product images(List<String> images) {
    this.images = images;
    return this;
  }

  public Product addImagesItem(String imagesItem) {
    if (this.images == null) {
      this.images = new ArrayList<>();
    }
    this.images.add(imagesItem);
    return this;
  }

  /**
   * Get images
   * @return images
   */
  
  @Schema(name = "images", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("images")
  public List<String> getImages() {
    return images;
  }

  @JsonProperty("images")
  public void setImages(List<String> images) {
    this.images = images;
  }

  public Product category(@Nullable Category category) {
    this.category = category;
    return this;
  }

  /**
   * Get category
   * @return category
   */
  @Valid 
  @Schema(name = "category", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("category")
  public @Nullable Category getCategory() {
    return category;
  }

  @JsonProperty("category")
  public void setCategory(@Nullable Category category) {
    this.category = category;
  }

  public Product createdAt(@Nullable String createdAt) {
    this.createdAt = createdAt;
    return this;
  }

  /**
   * Get createdAt
   * @return createdAt
   */
  
  @Schema(name = "createdAt", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("createdAt")
  public @Nullable String getCreatedAt() {
    return createdAt;
  }

  @JsonProperty("createdAt")
  public void setCreatedAt(@Nullable String createdAt) {
    this.createdAt = createdAt;
  }

  public Product seller(@Nullable SellerPreview seller) {
    this.seller = seller;
    return this;
  }

  /**
   * Get seller
   * @return seller
   */
  @Valid 
  @Schema(name = "seller", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("seller")
  public @Nullable SellerPreview getSeller() {
    return seller;
  }

  @JsonProperty("seller")
  public void setSeller(@Nullable SellerPreview seller) {
    this.seller = seller;
  }

  public Product links(Map<String, Object> links) {
    this.links = links;
    return this;
  }

  public Product putLinksItem(String key, Object linksItem) {
    if (this.links == null) {
      this.links = new HashMap<>();
    }
    this.links.put(key, linksItem);
    return this;
  }

  /**
   * Get links
   * @return links
   */
  
  @Schema(name = "_links", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("_links")
  public Map<String, Object> getLinks() {
    return links;
  }

  @JsonProperty("_links")
  public void setLinks(Map<String, Object> links) {
    this.links = links;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Product product = (Product) o;
    return Objects.equals(this.id, product.id) &&
        Objects.equals(this.name, product.name) &&
        Objects.equals(this.description, product.description) &&
        Objects.equals(this.price, product.price) &&
        Objects.equals(this.currency, product.currency) &&
        Objects.equals(this.stock, product.stock) &&
        Objects.equals(this.images, product.images) &&
        Objects.equals(this.category, product.category) &&
        Objects.equals(this.createdAt, product.createdAt) &&
        Objects.equals(this.seller, product.seller) &&
        Objects.equals(this.links, product.links);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, description, price, currency, stock, images, category, createdAt, seller, links);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Product {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    stock: ").append(toIndentedString(stock)).append("\n");
    sb.append("    images: ").append(toIndentedString(images)).append("\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    seller: ").append(toIndentedString(seller)).append("\n");
    sb.append("    links: ").append(toIndentedString(links)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(@Nullable Object o) {
    return o == null ? "null" : o.toString().replace("\n", "\n    ");
  }
}

