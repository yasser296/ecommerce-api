package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import java.math.BigDecimal;
import org.springframework.lang.Nullable;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * ProductUpdateInput
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-04-08T10:47:06.539361157Z[Etc/UTC]", comments = "Generator version: 7.22.0-SNAPSHOT")
public class ProductUpdateInput {

  private @Nullable BigDecimal price;

  private @Nullable Integer stock;

  public ProductUpdateInput price(@Nullable BigDecimal price) {
    this.price = price;
    return this;
  }

  /**
   * Get price
   * minimum: 0.01
   * @return price
   */
  @Valid @DecimalMin(value = "0.01") 
  @Schema(name = "price", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("price")
  public @Nullable BigDecimal getPrice() {
    return price;
  }

  @JsonProperty("price")
  public void setPrice(@Nullable BigDecimal price) {
    this.price = price;
  }

  public ProductUpdateInput stock(@Nullable Integer stock) {
    this.stock = stock;
    return this;
  }

  /**
   * Get stock
   * minimum: 0
   * @return stock
   */
  @Min(value = 0) 
  @Schema(name = "stock", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("stock")
  public @Nullable Integer getStock() {
    return stock;
  }

  @JsonProperty("stock")
  public void setStock(@Nullable Integer stock) {
    this.stock = stock;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductUpdateInput productUpdateInput = (ProductUpdateInput) o;
    return Objects.equals(this.price, productUpdateInput.price) &&
        Objects.equals(this.stock, productUpdateInput.stock);
  }

  @Override
  public int hashCode() {
    return Objects.hash(price, stock);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductUpdateInput {\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    stock: ").append(toIndentedString(stock)).append("\n");
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

